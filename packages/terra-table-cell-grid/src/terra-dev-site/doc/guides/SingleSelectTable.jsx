import React, {
  useState,
} from 'react';
import TableCellGrid, {
  CellGrid, Cell, HeaderCellGrid, HeaderCell,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const SingleSelectTable = () => {
  const [selectedKey, setSelectedKey] = useState([]);

  const handleCellGridSelection = (event, metaData) => {
    event.preventDefault();
    if (selectedKey !== metaData.key) {
      setSelectedKey(metaData.key);
    }
  };

  const createCellGrid = cellGridData => (
    <CellGrid
      key={cellGridData.key}
      isSelectable
      isSelected={selectedKey === cellGridData.key}
      metaData={{ key: cellGridData.key }}
      onSelect={handleCellGridSelection}
    >
      {createCellsForCellGrid(cellGridData.cells)}
    </CellGrid>
  );

  const createCellGrids = data => data.map(childItem => createCellGrid(childItem));

  return (
    <TableCellGrid
      paddingStyle="standard"
      headerCellGrid={(
        <HeaderCellGrid>
          <HeaderCell isPadded key="cell-0">Column 0</HeaderCell>
          <HeaderCell isPadded key="cell-1">Column 1</HeaderCell>
          <HeaderCell isPadded key="cell-2">Column 2</HeaderCell>
          <HeaderCell isPadded key="cell-3">Column 3</HeaderCell>
        </HeaderCellGrid>
      )}
    >
      {createCellGrids(mockData)}
    </TableCellGrid>
  );
};

export default SingleSelectTable;