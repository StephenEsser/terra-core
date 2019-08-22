import React from 'react';
import TableCellGrid, {
  CellGrid, Cell, HeaderCellGrid, HeaderCell,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const widths = [
  { percentage: 20 },
  { percentage: 40 },
  { percentage: 10 },
  { percentage: 30 },
];

const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map((cell, index) => createCell(cell, index));

const createCellGrid = cellGridData => (
  <CellGrid key={cellGridData.key}>
    {createCellsForCellGrid(cellGridData.cells)}
  </CellGrid>
);

const createCellGrids = data => data.map(childItem => createCellGrid(childItem));

const PercentageWidthTable = () => (
  <TableCellGrid
    paddingStyle="standard"
    headerCellGrid={(
      <HeaderCellGrid>
        <HeaderCell isPadded key="cell-0" width={widths[0]}>20%</HeaderCell>
        <HeaderCell isPadded key="cell-1" width={widths[1]}>40%</HeaderCell>
        <HeaderCell isPadded key="cell-2" width={widths[2]}>10%</HeaderCell>
        <HeaderCell isPadded key="cell-3" width={widths[3]}>30%</HeaderCell>
      </HeaderCellGrid>
    )}
  >
    {createCellGrids(mockData)}
  </TableCellGrid>
);

export default PercentageWidthTable;