import { useState } from "react";
import Images from './Images/contacts.png'

function List({contacts}) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log("filtered", filtered);

  return (
    <div>
      <h3>Toplam Kişi Sayısı ({filtered.length})</h3>
      <input type="text" placeholder="Ara" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>

      <ul className="list">
        {filtered.map((contact,i) => (
          <li key={i}>
            <span>
              <img src={Images} alt="" />
              {contact.fullname}
            </span> 
            <span>
              {contact.phone_number}
            </span>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default List;