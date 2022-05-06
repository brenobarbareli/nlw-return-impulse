const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy },
);

import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

describe('Submit feedback', () => {
  it('should be able to submit a feedback', () => {
    expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,aushdjiahsdjkahskd',
      }),
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should be not able to submit a feedback without type', () => {
    expect(
      submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,aushdjiahsdjkahskd',
      }),
    ).rejects.toThrow();
  });

  it('should be not able to submit a feedback without comment', () => {
    expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,aushdjiahsdjkahskd',
      }),
    ).rejects.toThrow();
  });

  it('should be not able to submit a feedback with an invalid screenshot', () => {
    expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'comment-type',
        screenshot: '123',
      }),
    ).rejects.toThrow();
  });
});
