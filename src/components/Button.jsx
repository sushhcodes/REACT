// Shared action buttons used by the student form and the student table.

export function SaveButton({ label = 'Save student' }) {
  return (
    <button className="button" type="submit">
      {label}
    </button>
  );
}

export function DeleteButton({ onClick, label = 'Delete' }) {
  return (
    <button
      className="text-button delete-button"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
