import React from 'react';

export default function BookShelfChanger({
  currentValue,
  onChange,
}) {
  return (
    <div className="book-shelf-changer">
      <select value={currentValue} onChange={e => onChange(e.target.value)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
