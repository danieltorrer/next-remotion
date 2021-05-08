import React from 'react';
import {AbsoluteFill, interpolate, Sequence, useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {Background, BackgroundProps} from './Background';
import {defaultPadding} from './constants';
import {NewsImage, NewsImageProps} from './Image';
import {Paragraph, ParagraphProps} from './Paragraph';
import {SwipeArrow} from './SwipeArrow';
import {Title, TitleProps} from './Title';

type StoryProps = TitleProps &
	NewsImageProps &
	BackgroundProps &
	ParagraphProps & {storyDuration: number; hasSwipeAnim: boolean};

const StyledTextContent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	padding: ${defaultPadding}px ${defaultPadding * 1.5}px
		${defaultPadding * 1.5}px;
	justify-content: end;
	height: 100%;
	justify-content: space-between;
`;

const StoryStyledParagraph = styled(Paragraph)`
	margin-bottom: 90px;
`;

export const Story: React.FC<StoryProps> = ({
	background,
	src,
	titleText,
	titleColor,
	text,
	border,
	storyDuration,
	paragraphColor,
	hasSwipeAnim,
}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, storyDuration / 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const transitionStart = 25;

	return (
		<AbsoluteFill>
			<Sequence from={0} durationInFrames={storyDuration}>
				<Background background={background} />
			</Sequence>

			<Sequence from={0} durationInFrames={storyDuration}>
				<NewsImage src={src} border={border} opacity={opacity} />
			</Sequence>

			<Sequence from={transitionStart} durationInFrames={storyDuration}>
				<StyledTextContent>
					<div>
						<Title titleColor={titleColor} titleText={titleText} />
					</div>
					<div>
						<StoryStyledParagraph text={text} paragraphColor={paragraphColor} />
						{hasSwipeAnim && <SwipeArrow />}
					</div>
				</StyledTextContent>
			</Sequence>
		</AbsoluteFill>
	);
};
