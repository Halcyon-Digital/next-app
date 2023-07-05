import React from 'react';

function ServerComponent({ data }) {
  return (
    <div>
      <h1>Server-Side Component</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    const slicedData = data.slice(0, 10); // Fetching only 10 items for demonstration purposes

    return {
      props: {
        data: slicedData,
      },
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default ServerComponent;
