import css from './Options.module.css';

export default function Options({ onLeaveFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.container}>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
