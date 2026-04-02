"use client";

export default function EventFilters({ setFilters }) {
  return (
    <div>
      <select onChange={(e) => setFilters(f => ({ ...f, event_type: e.target.value }))}>
        <option value="">All Type</option>
        <option value="connect">Connect</option>
        <option value="elevate">Elevate</option>
      </select>

      <select onChange={(e) => setFilters(f => ({ ...f, mode_of_event: e.target.value }))}>
        <option value="">Mode</option>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>

      <input
        placeholder="Search..."
        onChange={(e) => setFilters(f => ({ ...f, q: e.target.value }))}
      />
    </div>
  );
}