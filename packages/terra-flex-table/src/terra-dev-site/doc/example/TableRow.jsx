import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell } from 'terra-flex-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableRowExample = () => (
  <Table
    paddingStyle="standard"
  >
    <Row key="default_row">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </Row>
    <Row key="striped_row" isStriped>
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </Row>
    <Row isSelectable key="selectable_row">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </Row>
    <Row isSelectable isSelected key="selected_row">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </Row>
  </Table>
);

export default TableRowExample;