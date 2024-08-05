// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 5% 2.5%;
	background: rgba(185, 113, 113);
	// position: absolute;
	bottom: 0;
	width: 100%;

	@media (max-width: 100%) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adds space between items */

  & > div {
    flex: 1 1 185px; /* Grow, shrink, and set the base width */
    max-width: calc(25% - 20px); /* Approximate 4 items per row on large screens minus the gap */
    box-sizing: border-box; /* Ensure padding and border are included in the element's total width and height */
  }

  @media (max-width: 1024px) {
    & > div {
      max-width: calc(33.33% - 20px); /* Approximate 3 items per row on medium screens */
    }
  }

  @media (max-width: 768px) {
    & > div {
      max-width: calc(50% - 20px); /* Approximate 2 items per row on small screens */
    }
  }

  @media (max-width: 480px) {
    & > div {
      max-width: calc(100% - 20px); /* 1 item per row on extra small screens */
    }
  }

`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;
