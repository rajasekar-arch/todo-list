export default function EditModal({ show, onClose, onSave, task }) {
    const [editedText, setEditedText] = useState(task?.text || '');
    const [editedDate, setEditedDate] = useState(task?.dueDate || '');

    useEffect(() => {
        if (task) {
            setEditedText(task.text);
            setEditedDate(task.dueDate || '');
        }
    }, [task]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded p-6 w-11/12 max-w-md shadow-lg relative">
                <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
                <input
                    type="text"
                    className="w-full p-2 mb-4 border rounded"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
                <input
                    type="date"
                    className="w-full p-2 mb-4 border rounded"
                    value={editedDate}
                    onChange={(e) => setEditedDate(e.target.value)}
                />
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onSave(task.id, editedText, editedDate);
                            onClose();
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
