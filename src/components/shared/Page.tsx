import React from 'react';

const Page = (props: { children?: React.ReactNode }) => {
	return (
		<div className='container'>
			<div className='row'>{props.children}</div>
		</div>
	);
};

const Header = (props: { children?: React.ReactNode }) => <div className='col-12'>{props.children}</div>;
Page.Header = Header;

const BreadCrumb = (props: { children?: React.ReactNode }) => <div className='col-12'>{props.children}</div>;
Page.BreadCrumb = BreadCrumb;

const Aside = (props: { children?: React.ReactNode }) => <div className='col-4'>{props.children}</div>;
Page.Aside = Aside;

const Main = (props: { children?: React.ReactNode }) => <div className='col-8'>{props.children}</div>;
Page.Main = Main;

export default Page;
