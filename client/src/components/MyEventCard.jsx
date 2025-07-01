import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router";

const MyEventCard = ({ event, onDelete }) => {
  const { _id, title, date, time, location, attendeeCount } = event;

  return (
    <div className="bg-base-100 shadow rounded-lg p-6 border border-base-300 space-y-4">
      <h3 className="text-xl font-bold text-primary">{title}</h3>

      <div className="text-sm space-y-1 text-base-content text-opacity-80">
        <p>
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {time}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p>
          <span className="font-semibold">Attendees:</span> {attendeeCount}
        </p>
      </div>

      <div className="flex gap-3 mt-4">
        <Link
          to={`/update-event/${_id}`}
          className="btn btn-sm btn-outline btn-accent"
        >
          <FaEdit className="mr-1" />
          Edit
        </Link>

        <button onClick={onDelete} className="btn btn-sm btn-outline btn-error">
          <FaTrash className="mr-1" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyEventCard;
