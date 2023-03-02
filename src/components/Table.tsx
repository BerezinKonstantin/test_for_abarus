import React from "react";

const Table = () => {
  return (
    <table className="table">
      <col width="110" />
      <col width="529" />
      <col width="432" />
      <tr className="table__heading">
        <th>
          <p className="table__heading_text">ID</p>
        </th>
        <th>
          <p className="table__heading_text">Заголовок</p>
        </th>
        <th>
          <p className="table__heading_text">Описание</p>
        </th>
      </tr>
      <tr className="table__row">
        <td>1</td>
        <td></td>
        <td>
          quia et suscipit\nsuscipit recusandae consequuntur expedita et
          cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
          sunt rem eveniet architecto
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>qui est esse</td>
        <td>
          est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae
          ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla
        </td>
      </tr>
      <tr className="table__row">
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
};

export default Table;
