import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, Heading, Stack, Link, Divider, Icon } from '@chakra-ui/react';
import NextLink from 'next/link';
import { SiNextDotJs, SiCss3, SiHtml5, SiJavascript } from 'react-icons/si';

const projects = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Projects Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.projectsMain}>
				<Box
					textAlign='center'
					p='20px 50px'
					width='inherit'
					borderBottom='1px'
					borderColor='gray.200'
				>
					<Heading>Projects</Heading>
				</Box>
				<Stack
					p={['5px', '10px']}
					spacing='10px'
					width='inherit'
					divider={<Divider borderColor='gray.200' />}
				>
					<Link as={NextLink} href='/profile-card'>
						<Box
							_hover={{ bg: 'gray.100', cursor: 'pointer' }}
							rounded='lg'
							p='5px'
							textAlign='center'
						>
							Profile Card Component
							<Stack h='50px' align='center' justify='center' spacing='10px' isInline>
								<Icon as={SiNextDotJs} h={6} w={6} />
								<Icon as={SiHtml5} h={6} w={6} />
								<Icon as={SiCss3} h={6} w={6} />
							</Stack>
						</Box>
					</Link>
					<Link as={NextLink} href='/faq'>
						<Box
							_hover={{ bg: 'gray.100', cursor: 'pointer' }}
							rounded='lg'
							p='5px'
							textAlign='center'
						>
							FAQ Accordion Card
							<Stack h='50px' align='center' justify='center' spacing='10px' isInline>
								<Icon as={SiNextDotJs} h={6} w={6} />
								<Icon as={SiHtml5} h={6} w={6} />
								<Icon as={SiCss3} h={6} w={6} />
							</Stack>
						</Box>
					</Link>
					<Link as={NextLink} href='/test-grid'>
						<Box
							_hover={{ bg: 'gray.100', cursor: 'pointer' }}
							rounded='lg'
							p='5px'
							textAlign='center'
						>
							Testimonials Grid Section
							<Stack h='50px' align='center' justify='center' spacing='10px' isInline>
								<Icon as={SiNextDotJs} h={6} w={6} />
								<Icon as={SiHtml5} h={6} w={6} />
								<Icon as={SiCss3} h={6} w={6} />
							</Stack>
						</Box>
					</Link>
					<Link as={NextLink} href='/ip-tracker'>
						<Box
							_hover={{ bg: 'gray.100', cursor: 'pointer' }}
							rounded='lg'
							p='5px'
							textAlign='center'
						>
							IP Address Tracker
							<Stack h='50px' align='center' justify='center' spacing='10px' isInline>
								<Icon as={SiNextDotJs} h={6} w={6} />
								<Icon as={SiHtml5} h={6} w={6} />
								<Icon as={SiCss3} h={6} w={6} />
								<Icon as={SiJavascript} h={6} w={6} />
							</Stack>
						</Box>
					</Link>
					<Link as={NextLink} href='/todo-app'>
						<Box
							_hover={{ bg: 'gray.100', cursor: 'pointer' }}
							rounded='lg'
							p='5px'
							textAlign='center'
						>
							To Do App
							<Stack h='50px' align='center' justify='center' spacing='10px' isInline>
								<Icon as={SiNextDotJs} h={6} w={6} />
								<Icon as={SiHtml5} h={6} w={6} />
								<Icon as={SiCss3} h={6} w={6} />
								<Icon as={SiJavascript} h={6} w={6} />
							</Stack>
						</Box>
					</Link>
				</Stack>
			</main>
		</div>
	);
};

export default projects;
