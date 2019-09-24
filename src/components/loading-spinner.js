import React from "react";
import styled from "styled-components";

const LoadingSpinnerWrapper = styled.div`
    width: 100px;
    height: 100px;
`;

const LoadingSpinner = () => {
	return(
		<LoadingSpinnerWrapper>
			<img
				src="spinner.svg"
				alt="loading..."
				height="87px"
				width="100px" />
		</LoadingSpinnerWrapper>

	);
};

export  default LoadingSpinner;