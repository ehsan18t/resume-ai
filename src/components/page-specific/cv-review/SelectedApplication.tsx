export default function SelectedApplication({ application, className }) {
  return (
    <div className={className}>
      {application ? (
        <div>
          <h1 className="text-2xl py-2 font-bold">Profile</h1>
        </div>
      ) : (
        <p>Select an application</p>
      )}
    </div>
  );
}
