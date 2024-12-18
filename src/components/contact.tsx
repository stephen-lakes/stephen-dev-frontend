const ContactForm = () => {
  return (
    <>
      <div className="hero min-h-screen px-3">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fullname</span>
              </label>
              <input
                type="test"
                placeholder="e.g John Doe"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="e.g John@email.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>

              <textarea className="input input-bordered"></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
