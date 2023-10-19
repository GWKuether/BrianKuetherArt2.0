import { send } from "emailjs-com";
import { useState } from "react";

const CommissionsPage = (props) => {

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Brian",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_943nj7i',
      'template_weje72q',
      toSend,
      'SIBJ0U8EQXP1YU8ZW'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommissionsPage;
