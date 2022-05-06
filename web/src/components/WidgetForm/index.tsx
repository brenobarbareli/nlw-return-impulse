import { useState } from 'react';
import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import thoughtImageUrl from '../../assets/Thought.svg';
import { FeedbackContentStep } from './steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './steps/FeedbackTypeStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: { source: bugImageUrl, alt: 'Imagem de um inseto' },
  },
  IDEA: {
    title: 'Ideia',
    image: { source: ideaImageUrl, alt: 'Imagem de uma lâmpada' },
  },
  OTHER: {
    title: 'Outro',
    image: { source: thoughtImageUrl, alt: 'Imagem de um balão de pensamento' },
  },
};

export type feedbackType = keyof typeof feedbackTypes;

/*{ Object.entries(feedbackTypes)} retorna um array de arrays
retorno será
[
['bug',{todo o conteudo }]
['idea',{todo o conteudo }]
['thought',{todo o conteudo }]
]

*/
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div
      className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg 
    w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {feedbackType === null ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className='text-md text-neutral-400'>
        Feito com ♥ pela{' '}
        <a
          className='underline underline-offset-1'
          href='https://rocketseat.com.br'>
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
