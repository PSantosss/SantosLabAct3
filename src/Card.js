function Card(props) {
  return (
    <div
      style={{
        ...styles.card,
        ...styles[props.size],
      }}
    ></div>
  );
}
