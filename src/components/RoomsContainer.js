import React from 'react';
import RoomsFilter from '../components/RoomsFilter';
import RoomsList from '../components/RoomsList';
import { withRoomConsumer } from '../Context';
import Loading from '../components/Loading';

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

// HOC
export default withRoomConsumer(RoomsContainer);

// import React from 'react';
// import RoomsFilter from '../components/RoomsFilter';
// import RoomsList from '../components/RoomsList';
// import { RoomConsumer } from '../Context';
// import Loading from '../components/Loading';

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
