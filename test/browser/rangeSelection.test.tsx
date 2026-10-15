import { page, userEvent } from '@vitest/browser/context';

import type { Column } from '../../src';
import type { CellsRange } from '../../src/types';
import { getCell, setup, validateCellPosition } from './utils';

interface Row {
  a: string;
  b: string;
  c: string;
}

const columns: readonly Column<Row>[] = [
  { key: 'a', name: 'A' },
  { key: 'b', name: 'B' },
  { key: 'c', name: 'C' }
];

const rows: readonly Row[] = Array.from({ length: 5 }, (_, rowIdx) => ({
  a: `a${rowIdx + 1}`,
  b: `b${rowIdx + 1}`,
  c: `c${rowIdx + 1}`
}));

const onSelectedRangeChange = vi.fn<(range: CellsRange) => void>();

function setupGrid(enableRangeSelection = true) {
  onSelectedRangeChange.mockClear();
  setup<Row, unknown>({ columns, rows, enableRangeSelection, onSelectedRangeChange });
}

async function shiftClick(name: string) {
  await userEvent.keyboard('{Shift>}');
  await userEvent.click(getCell(name));
  await userEvent.keyboard('{/Shift}');
}

function getSelectedCells() {
  return page.getByRole('gridcell', { selected: true });
}

function expectRange(
  startRowIdx: number,
  startColumnIdx: number,
  endRowIdx: number,
  endColumnIdx: number
) {
  expect(onSelectedRangeChange).toHaveBeenLastCalledWith({
    startRowIdx,
    startColumnIdx,
    endRowIdx,
    endColumnIdx
  });
}

test('shift + arrow keys extend the selected range when range selection is enabled', async () => {
  setupGrid();

  await userEvent.click(getCell('a1'));
  await userEvent.keyboard('{Shift>}{ArrowDown}{ArrowRight}{/Shift}');

  expectRange(0, 0, 1, 1);
  await expect.element(getCell('b2')).toHaveAttribute('aria-selected', 'true');
  await expect.element(getCell('c3')).toHaveAttribute('aria-selected', 'false');

  // shift + tab still navigates
  await userEvent.click(getCell('b1'));
  await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
  await validateCellPosition(0, 1);
});

test('shift + arrow keys navigate when range selection is disabled', async () => {
  setupGrid(false);

  await userEvent.click(getCell('a1'));
  await userEvent.keyboard('{Shift>}{ArrowDown}{ArrowRight}{/Shift}');
  await validateCellPosition(1, 2);
  await expect.element(getCell('a1')).toHaveAttribute('aria-selected', 'false');
});

test('shift + click extends the range from the selected cell', async () => {
  setupGrid();
  await userEvent.click(getCell('a2'));
  expectRange(1, 0, 1, 0);
  await expect.poll(() => getSelectedCells().elements()).toHaveLength(1);

  await shiftClick('c4');
  expectRange(1, 0, 3, 2);
  await expect.poll(() => getSelectedCells().elements()).toHaveLength(9);
  await expect.element(getCell('a2')).toHaveAttribute('aria-selected', 'true');
  await expect.element(getCell('c4')).toHaveAttribute('aria-selected', 'true');
  await expect.element(getCell('a5')).toHaveAttribute('aria-selected', 'false');
});

test('shift + click extends the range upwards and leftwards', async () => {
  setupGrid();
  await userEvent.click(getCell('c4'));
  await shiftClick('b2');
  expectRange(1, 1, 3, 2);
  await expect.poll(() => getSelectedCells().elements()).toHaveLength(6);
  await expect.element(getCell('a2')).toHaveAttribute('aria-selected', 'false');
});

test('shift + click again keeps the selected cell as the anchor', async () => {
  setupGrid();
  await userEvent.click(getCell('b2'));
  await shiftClick('c4');
  expectRange(1, 1, 3, 2);
  await shiftClick('a1');
  expectRange(0, 0, 1, 1);
  await expect.poll(() => getSelectedCells().elements()).toHaveLength(4);
});

test('plain click resets the extended range', async () => {
  setupGrid();
  await userEvent.click(getCell('a2'));
  await shiftClick('c4');
  await expect.poll(() => getSelectedCells().elements()).toHaveLength(9);

  await userEvent.click(getCell('b5'));
  expectRange(4, 1, 4, 1);
  await expect.poll(() => getSelectedCells().elements()).toHaveLength(1);
  await expect.element(getCell('b5')).toHaveAttribute('aria-selected', 'true');

  // clicking the selected cell itself also collapses the range
  await shiftClick('c3');
  await expect.poll(() => getSelectedCells().elements()).toHaveLength(6);
  await userEvent.click(getCell('b5'));
  expectRange(4, 1, 4, 1);
  await expect.poll(() => getSelectedCells().elements()).toHaveLength(1);
});

test('shift + click moves the selected cell when range selection is disabled', async () => {
  setupGrid(false);
  await userEvent.click(getCell('a2'));
  await shiftClick('c4');
  await expect.poll(() => getSelectedCells().elements()).toHaveLength(1);
  await expect.element(getCell('c4')).toHaveAttribute('aria-selected', 'true');
});
