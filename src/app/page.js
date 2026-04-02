"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getEvents } from "@/utils/api";
import EventFilters from "@/components/EventFilters";
import EventList from "@/components/EventList";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({});
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "Member") {
      alert("Upgrade Your Account");
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents(filters);
      setEvents(data?.data || []);
    };

    fetchData();
  }, [filters]);

  return (
    <div>
      <h1>Events</h1>

      <EventFilters setFilters={setFilters} />
      <EventList events={events} />
    </div>
  );
}