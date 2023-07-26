const styles = {
  container: {
    // minHeight: 'calc(100vh - 150px)',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    margin: '0px',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phonebook "BLENDER"</h1>
      <h3>New features coming up daily...</h3>
    </div>
  );
}
