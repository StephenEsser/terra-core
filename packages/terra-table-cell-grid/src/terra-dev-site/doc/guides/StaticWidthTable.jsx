import React from 'react';
import TableCellGrid, {
  CellGrid, Cell, HeaderCellGrid, HeaderCell,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const widths = [
  { static: { value: 80, unit: 'px' } },
  { static: { value: 55, unit: 'px' } },
  { static: { value: 5, unit: 'rem' } },
  { static: { value: 120, unit: 'px' } },
];

const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map((cell, index) => createCell(cell, index));

const createCellGrid = cellGridData => (
  <CellGrid key={cellGridData.key}>
    {createCellsForCellGrid(cellGridData.cells)}
  </CellGrid>
);

const createCellGrids = data => data.map(childItem => createCellGrid(childItem));

const FixedWidthTable = () => (
  <TableCellGrid
    paddingStyle="standard"
    header={(
      <HeaderCellGrid>
        <HeaderCell isPadded key="cell-0" width={widths[0]}>60px</HeaderCell>
        <HeaderCell isPadded key="cell-1" width={widths[1]}>45px</HeaderCell>
        <HeaderCell isPadded key="cell-2" width={widths[2]}>5rem</HeaderCell>
        <HeaderCell isPadded key="cell-3" width={widths[3]}>120px</HeaderCell>
      </HeaderCellGrid>
    )}
  >
    {createCellGrids(mockData)}
  </TableCellGrid>
);

export default FixedWidthTable;