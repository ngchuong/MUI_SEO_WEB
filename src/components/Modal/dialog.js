import "./index.css";

export const SimpleDialog = ({ content }) => <div>{content}</div>;

export const AlertDialog = ({ content, onSubmit }) => {
  const clickSubmit = () => {
    onSubmit();
  };
  return (
    <div>
      <div>{content}</div>
      <div className="container-button">
        <button className="btn-submit" type="button" onClick={clickSubmit}>
          OK
        </button>
      </div>
    </div>
  );
};

export const ConfirmDialog = ({ content, onSubmit, onCancel }) => {
  const clickSubmit = () => {
    onSubmit();
  };
  const clickCancel = () => {
    onCancel();
  };
  return (
    <div>
      {/* <div className="title">Confirm</div> */}
      <div>{content}</div>
      <div className="container-button">
        <button className="btn-cancel" type="button" onClick={clickCancel}>
          Cancel
        </button>
        <button className="btn-submit" type="button" onClick={clickSubmit}>
          OK
        </button>
      </div>
    </div>
  );
};
