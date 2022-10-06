import { useState, useEffect } from "react";

const initialFormValues = {fullname: "", phone_number: ""};

function Form({addContact, contacts}) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(form.fullname === "" || form.phone_number === ""){
      return false;
    }
    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name='fullname' placeholder='İsim Gİirniz' onChange={onChangeInput} value={form.fullname}/>
      </div>
      <div>
        <input type="tel" name='phone_number' placeholder='Telofon Numarası Gİriniz'  onChange={onChangeInput} value={form.phone_number}/>
      </div>
      <div className="btn">
        <button>Kayıt EKLE</button>
      </div>
    </form>
  )
}

export default Form;