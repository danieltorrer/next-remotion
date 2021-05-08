import styled, {keyframes} from 'styled-components';

const slide = keyframes`
    0% { opacity:0; transform: translateY(2vw); }  
   30% { opacity:1; transform: translateY(0vw); } 
   60% { opacity:1; transform: translateY(-2vw); }  
  100% { opacity:0; transform: translateY(-4vw); } 
`;

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const StyledArrowSliding = styled.div`
	position: absolute;
	/* -webkit-animation: ${slide} 3s linear infinite; */
	animation: ${slide} 2s linear infinite;
`;

const StyledArrow = styled.div`
	width: 3vw;
	height: 2vw;
	border: 2vw solid;
	border-color: #2d2d2d transparent transparent #2d2d2d;
	transform: rotate(45deg);
`;

const StyledParagraph = styled.p`
	font-size: 30px;
`;

const StyledArrowSlidingDelay = styled(({delay, ...props}) => (
	<StyledArrowSliding delay={delay} {...props} />
))`
	-webkit-animation-delay: ${({delay}) => delay / 2}s;
	animation-delay: ${({delay}) => delay / 2}s;
`;

export const SwipeArrow: React.FC = () => {
	return (
		<StyledContainer>
			<StyledArrowSliding>
				<StyledArrow />
			</StyledArrowSliding>
			<StyledArrowSlidingDelay delay={1}>
				<StyledArrow />
			</StyledArrowSlidingDelay>
			{/* <StyledArrowSlidingDelay delay={2}>
				<StyledArrow />
	</StyledArrowSlidingDelay> */}
			<StyledParagraph>Swipe up to read the full story</StyledParagraph>
		</StyledContainer>
	);
};
