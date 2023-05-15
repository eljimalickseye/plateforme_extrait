import { Box, Stack} from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';





function Release() {

    return (
        <>

            <Box mt="20px" height="150px" color="white"
                width="100%">
                <Stack spacing={0.1} className="text"
                    fontWeight="bold"
                    textShadow="1px 1px #000000, -1px -1px #ffffff" >
                    <Text fontSize="xl">
                        Votre espace etat civil
                    </Text>
                    <Text fontSize='xl'>
                        electronique. Delivrer des
                        papiers
                    </Text>
                    <Text fontSize='xl' borderBottom="1px" >
                        administratifs, partout!
                    </Text>
                </Stack>

            </Box>
            <Box height="150px"
                width="100%" justifyContent="center" alignItems="center" display="flex">
                <Text fontSize='6xl' color="gold">
                    Faire sa Demarche etat Civile sans se deplacer
                </Text>
            </Box>
            <Box height="180px"
                width="100%" justifyContent="center" alignItems="center" display="flex" columnGap="50px">
                <Box w="180px" h="140px" bg="rgba(0, 0, 255, 0.5)" color="white"
                    justifyContent="center" alignItems="center" display="flex"
                    borderRadius="15px"
                >
                    <Text fontSize='xl'>
                        <Link href="https://example.com" color="white"
                            textDecoration="none">
                            EXTRAIT
                        </Link>
                    </Text>
                </Box>
                <Box w="180px" h="140px" bg="rgba(0, 128, 0, 0.65)" color="white"
                    justifyContent="center" alignItems="center" display="flex"
                    borderRadius="15px"
                >
                    <Text fontSize='xl'>
                        <Link href="https://example.com" color="white"
                            textDecoration="none">
                            PASSPORT
                        </Link>
                    </Text>
                </Box>
                <Box w="180px" h="140px" bg="rgba(150, 0, 0, 0.65)" color="white"
                    justifyContent="center" alignItems="center" display="flex"
                    borderRadius="15px"
                >
                    <Text fontSize='xl'>
                        <Link href="https://example.com" color="white"
                            textDecoration="none">
                            CNI
                        </Link>
                    </Text>
                </Box>
                <Box w="180px" h="140px" bg="rgba(0, 0, 0, 0.65)" color="white"
                    justifyContent="center" alignItems="center" display="flex"
                    borderRadius="15px"
                >
                    <Text fontSize='xl'>
                        <Link href="https://example.com" color="white"
                            textDecoration="none">
                            AUTRES
                        </Link>
                    </Text>
                </Box>

            </Box>
            <Box height="180px"
                width="100%" justifyContent="center" alignItems="center" display="flex"
            >
                <Stack direction='row'>
                    <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
                    <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
                    <Avatar src='https://bit.ly/broken-link' />
                    <Avatar src='https://bit.ly/broken-link' />
                </Stack>
            </Box>
        </>
    )
}

export default Release;
