import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Image } from 'react-bootstrap';

import './rooms.css';

const Rooms = () => {

	const [rooms,setRooms] = useState([
		{ name: 'Space Adventure', description: 'You and your crew crash land on an alien planet, to make it home safely you must use the materials gathered in the room to fix your space ship and get back to earth before you run out of oxygen.', price: '$30 per player', type: 'Indoors', difficulty: '4/5', minPlayers: '4', duration: '1 hour', imageSrc: "{require('./space.png')}", id: 1 },
		{ name: 'The Castle', description: 'You and your friends must search the castle and find the magical weapon that will defeat the mystical dragon that is threatning your land, only it can save you and your people.', price: '$30 per player', type: 'Indoors', difficulty: '3/4', minPlayers: '4', duration: '1 hour', imageSrc: "{require('./castle.png')}", id: 2 },
		{ name: 'Jungle Escape', description: 'During a jungle expedition tour you and your closest friends decide to venture away from the tour group and are left stranded in the jungle, you must use the tools in your posession to return to the safetey of the nearest tour guide center before nigh fall when the beasts feast.', price: '$20 per player', type: 'Outdoors', difficulty: '3/5', minPlayers: '3', imageSrc: "{require('./jungle.png')}", id: 3 },
		{ name: 'Code Red', description: 'A weapon of mass destruction is about to be launched. You and your team have 45 mins to break into the Airforce base file room and find the detonation code and deactivate the missile before its too late! ', price: '$20 per player', type: 'Outddors', difficulty: '3/5', minPlayers: '3', duration: '45 minutes', imageSrc: "{require('./red.png')}", id: 4 },
		{ name: 'Undermined', description: 'You and your team must delve into the mine to discover what happened to the doctor and his findings, before radiation exposure and cave-ins get you first.', price: '$15 per player', type: 'Virtual', difficulty: '4.5/5', minPlayers: '2', duration: '30 mins', imageSrc: "{require('./mine.png')}", id: 5 },
		{ name: 'Warlocked', description: 'Melvin the Mystic has trapped himself in another dimension, as his trusted aprentices, it is up to you to follow the trail of magic and reverse the spell before he is lost forever', price: '$15 per player ', type: 'Virtual', difficulty: '3.5/5', minPlayers: '2', duration: '45 mins', imageSrc: "{require('./magic.png')}", id: 6 },

	])


return (
	<Container>
		<h1>Select your escape room</h1>
		{rooms.map((room) => (
			<Row key={room.id}>
				<Col>
					<h3>{room.name}</h3>
					<p>{room.description}</p>
					<p>{room.price}</p>
					<p>{room.difficulty}</p>
					<p>{room.type}</p>
					<p>{room.minPlayers}</p>
					<p>{room.duration}</p>
					<p>{room.price}</p>
				</Col>

				<Col>
				console.log({room.imageSrc})
					<Image src={require('./space.png')} alt="Room Image" fluid/>
				</Col>
				
			</Row>
		))}
	</Container>
	);
};

export default Rooms;