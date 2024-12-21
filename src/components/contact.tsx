import { Link } from "react-router";

const ContactForm = () => {
  return (
    <>
      <div className="card w-full max-w-sm shrink-0 shadow-2xl mt-10">
        <form className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="e.g John Doe"
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="e.g John@email.com"
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Message</span>
            </label>

            <textarea className="input input-bordered text-black"></textarea>
          </div>
          <div className="mt-6">
            <button className="btn btn-primary">send</button>
          </div>
        </form>
      </div>
      <div className="mt-4 text-center">
        <Link to="/">
          <button className="rounded border-gray-950 bg-gray-950 border text-white-500 px-4 py-2  hover:text-white">
            Home &#8594;
          </button>
        </Link>
      </div>
    </>
  );
};

export default ContactForm;
