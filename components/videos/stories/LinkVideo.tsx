import {Sequence, useVideoConfig} from 'remotion';
import link1 from '../../../data/link1.json';
import link2 from '../../../data/link2.json';
import link3 from '../../../data/link3.json';
import link4 from '../../../data/link4.json';
import {STORY_DURATION} from './constants';
import {Story} from './Story';

const stories = [link1, link2, link3, link4];

export const LinkVideo: React.FC<{hasSwipeAnim: boolean}> = ({
	hasSwipeAnim,
}) => {
	const video = useVideoConfig();
	const durationInFrames = video.fps * STORY_DURATION;
	return (
		<>
			{stories.map((story, index) => {
				return (
					<Sequence
						key={story.title}
						from={index * durationInFrames}
						durationInFrames={durationInFrames}
					>
						<Story
							titleColor="black"
							background={story.background}
							border="#ffffff"
							paragraphColor="#2d2d2d"
							src={story.image.src}
							storyDuration={durationInFrames}
							text={story.meta_description}
							titleText={story.title}
							hasSwipeAnim={hasSwipeAnim}
						/>
					</Sequence>
				);
			})}
		</>
	);
};
