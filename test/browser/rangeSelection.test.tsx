import { userEvent } from '@vitest/browser/context';

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

const rows: readonly Row[] = [
  { a: 'a1', b: 'b1', c: 'c1' },
  { a: 'a2', b: 'b2', c: 'c2' },
  { a: 'a3', b: 'b3', c: 'c3' }
];

test('shift + arrow keys extend the selected range when range selection is enabled', async () => {
  const onSelectedRangeChange = vi.fn<(range: CellsRange) => void>();
  setup<Row, unknown>({ columns, rows, enableRangeSelection: true, onSelectedRangeChange });

  await userEvent.click(getCell('a1'));
  await userEvent.keyboard('{Shift>}{ArrowDown}{ArrowRight}{/Shift}');

  expect(onSelectedRangeChange).toHaveBeenLastCalledWith({
    startRowIdx: 0,
    startColumnIdx: 0,
    endRowIdx: 1,
    endColumnIdx: 1
  });
  await expect.element(getCell('b2')).toHaveAttribute('aria-selected', 'true');
  await expect.element(getCell('c3')).toHaveAttribute('aria-selected', 'false');

  // shift + tab still navigates
  await userEvent.click(getCell('b1'));
  await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
  await validateCellPosition(0, 1);
});

test('shift + arrow keys navigate when range selection is disabled', async () => {
  const onSelectedRangeChange = vi.fn<(range: CellsRange) => void>();
  setup<Row, unknown>({ columns, rows, onSelectedRangeChange });

  await userEvent.click(getCell('a1'));
  await userEvent.keyboard('{Shift>}{ArrowDown}{ArrowRight}{/Shift}');
  await validateCellPosition(1, 2);
  await expect.element(getCell('a1')).toHaveAttribute('aria-selected', 'false');
});
