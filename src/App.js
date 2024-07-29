import './App.css';
import Dashboard from './context/Note/Dashboard';
import NoteState from './context/Note/NoteState';
function App() {
  return (
    // Wrap the Dashboard component with NoteState to provide context
    <NoteState>
      <Dashboard />
    </NoteState>
  );
}
// nothing to add today

export default App;
