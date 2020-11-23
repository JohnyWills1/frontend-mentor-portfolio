import { Flex, Box, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const Header = () => {
	return (
		<>
			<header>
				<Flex justify='space-between' align='center' h='80px' px='30px'>
					<Box
						rounded='lg'
						p='5px'
						_hover={{
							bg: 'gray.100',
						}}
					>
						{' '}
						<Link as={NextLink} href='/'>
							Home
						</Link>
					</Box>

					<Box>
						<a href='https://github.com/JohnyWills1'>
							<Icon as={AiFillGithub} h={8} w={8} _hover={{ color: 'gray.500' }} />
						</a>
					</Box>
					<Box
						rounded='lg'
						p='5px'
						_hover={{
							bg: 'gray.100',
						}}
					>
						<Link as={NextLink} href='/projects'>
							Projects
						</Link>
					</Box>
				</Flex>
			</header>
		</>
	);
};

export default Header;
