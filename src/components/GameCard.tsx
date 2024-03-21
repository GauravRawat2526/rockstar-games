import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'


function GameCard({game} : {game : Game}) {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
        </CardBody>
    </Card>
  )
}

export default GameCard