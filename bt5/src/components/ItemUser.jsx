import React from "react";

export default function ItemUser({ user }) {
  return (
    <tbody>
      <tr>
        <td className="pl-4">1</td>
        <td>
          <h6 className="font-medium mb-0">{user.name}</h6>
        </td>
        <td>
          <span className="text-muted">Visual Designer</span>
          <br />
          <span className="text-muted">{user.age}</span>
        </td>
        <td>
          <span className="text-muted">{user.email}</span>
          <br />
        </td>
        <td>
          <span className="text-muted">{user.date}</span>
          <br />
        </td>
        <td>
          <select className="form-control category-select">
            {user.manage.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-trash" />{" "}
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-edit" />{" "}
          </button>
        </td>
      </tr>
    </tbody>
  );
}
