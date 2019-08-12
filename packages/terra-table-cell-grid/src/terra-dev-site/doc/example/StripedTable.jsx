import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  HeaderCell, Row, Cell, CheckMarkCell, HeaderCheckMarkCell,
} from 'terra-table-cell-grid/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const StripedTable = () => (
  <Table
    id="Table"
    headerCells={[
      <HeaderCheckMarkCell key="derp" />,
      <HeaderCell key="NAME">Name</HeaderCell>,
      <HeaderCell key="ADDRESS">Address</HeaderCell>,
      <HeaderCell key="PHONE_NUMBER">Phone Number</HeaderCell>,
    ]}
  >
    <Row key="PERSON_0">
      <CheckMarkCell key="derp" />
      <Cell key="NAME">John Smith</Cell>
      <Cell key="ADDRESS">123 Adams Drive</Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row key="PERSON_1" isStriped>
      <CheckMarkCell key="derp" />
      <Cell key="NAME">Jane Smith</Cell>
      <Cell key="ADDRESS">321 Drive Street</Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row key="PERSON_2">
      <CheckMarkCell key="derp" />
      <Cell key="NAME">Dave Smith</Cell>
      <Cell key="ADDRESS">213 Raymond Road</Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
  </Table>
);

export default StripedTable;