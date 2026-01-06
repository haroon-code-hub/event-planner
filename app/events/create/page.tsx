"use client";

import { useRouter } from "next/navigation";

export default function CreateEventPage() {
  const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Create New Event</h1>
        <p className="text-muted mt-2">
          Fill out the form below to create the event.
        </p>
      </div>
      <form className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm text-medium mb-2">
            Event Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="input-field"
            placeholder="Enter event title."
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm text-medium mb-2"
          >
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            className="input-field"
            placeholder="Enter event description."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-col-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm text-medium mb-2">
              Date & Time *
            </label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              required
              className="input-field"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm text-medium mb-2"
            >
              Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="input-field"
              placeholder="Enter event location."
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-col-2 gap-6">
          <div>
            <label
              htmlFor="maxAttendees"
              className="block text-sm text-medium mb-2"
            >
              Maximum Attendees
            </label>
            <input
              type="number"
              id="maxAttendees"
              name="maxAttendees"
              className="input-field"
              min="1"
              placeholder="leave this field empty for unlimted "
            />
          </div>
          <div>
            <label
              htmlFor="isPublic"
              className="block text-sm text-medium mb-2"
            >
              Event Visibility
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPublic"
                name="isPublic"
                defaultChecked
                className="h-4 w-4 text-primary focus:ring-primary border-slate-600 rounded bg-slate-800 "
              />
              <label className="text-foreground ml-2 block text-sm">
                Make this event public
              </label>
            </div>
          </div>
        </div>
        <div className="btn-primary">Create Event</div>
        <div className="btn-secondary" onClick={() => router.back()}>
          Cancel
        </div>
      </form>
    </div>
  );
}
