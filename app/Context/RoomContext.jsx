'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedIotStatus, setSelectedIotStatus] = useState('all');
  const [selectedMaintenance, setSelectedMaintenance] = useState('all');
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      setError(null); 
      try {
        setLoading(true);
        const response = await axios.get('https://673dcfc10118dbfe8608ddba.mockapi.io/rooms');
        setRooms(response.data);
        setFilteredRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
        setError('Failed to load rooms data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    if (!selectedRoomId) {
      setSelectedRoom(null); 
      return;
    }

    const fetchRoomById = async () => {
      setError(null); 
      try {
        setLoading(true);
        const response = await axios.get(`https://673dcfc10118dbfe8608ddba.mockapi.io/rooms/${selectedRoomId}`);
        setSelectedRoom(response.data);
      } catch (error) {
        console.error('Error fetching room details:', error);
        setError('Failed to load room details.');
      } finally {
        setLoading(false);
      }
    };

    fetchRoomById();
  }, [selectedRoomId]);

  const countRoomsByCategory = useMemo(
    () => (category) => rooms.filter((room) => room.category === category).length,
    [rooms]
  );

  const countRoomsByStatus = useMemo(
    () => (status) => rooms.filter((room) => room.status === status).length,
    [rooms]
  );

  const filterRooms = () => {
    let filtered = rooms;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((room) => selectedCategories.includes(room.category));
    }

    if (selectedIotStatus !== 'all') {
      filtered = filtered.filter((room) => room.iotStatus === selectedIotStatus);
    }

    if (selectedMaintenance !== 'all') {
      filtered = filtered.filter((room) => room.maintenance === selectedMaintenance);
    }

    setFilteredRooms(filtered);
  };

  useEffect(() => {
    filterRooms();
  }, [selectedCategories, selectedIotStatus, selectedMaintenance, rooms]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        filteredRooms,
        selectedCategories,
        setSelectedCategories,
        selectedIotStatus,
        setSelectedIotStatus,
        selectedMaintenance,
        setSelectedMaintenance,
        setSelectedRoomId,
        selectedRoom,
        filterRooms,
        setFilteredRooms,
        loading,
        error,
        countRoomsByCategory,
        countRoomsByStatus,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export const useRoomContext = () => useContext(RoomContext);