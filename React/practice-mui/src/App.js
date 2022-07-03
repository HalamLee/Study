import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Header() {
  return (
    <header>
      <h1>welcome</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav style={{ border: '1px solid gray' }}>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article style={{ border: '1px solid gray' }}>
      <h2>welcome</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia,
      doloribus totam illo repellendus dignissimos saepe voluptate itaque iusto,
      ut iure suscipit vitae voluptatem autem quo est eligendi hic enim eveniet
      quas quaerat exercitationem. Facilis voluptatem deserunt quisquam
      consequuntur, tempora natus. Commodi tempora reprehenderit animi voluptas
      soluta a suscipit pariatur quisquam aut architecto quo assumenda ab eius
      deserunt itaque neque necessitatibus corporis nulla debitis, cupiditate
      iusto vitae alias. Suscipit ut ab tenetur pariatur ipsa natus voluptas
      repellendus nemo quae. Saepe officiis recusandae, vero nihil quos ex nemo
      in distinctio suscipit doloremque neque dicta a, iure libero ut,
      necessitatibus inventore nesciunt totam. Tempore optio reiciendis aperiam,
      ipsa laudantium fugit fugiat aliquam vitae fuga quisquam consequatur error
      quis quo voluptatibus facere culpa distinctio nesciunt, nostrum ipsum cum
      earum deserunt perspiciatis id odio. Esse, sit magni obcaecati beatae
      reprehenderit enim quam facilis nemo laudantium, quis quidem ipsam velit
      impedit, et eaque. Beatae similique voluptatum eius cupiditate fugiat iure
      error ut exercitationem, esse, hic vero quasi, consectetur accusantium
      modi nostrum. Quaerat neque ipsa eius perspiciatis accusantium. Rerum
      fugit suscipit repellat corrupti, culpa eum, eos id quidem natus, minus
      cumque corporis animi quod qui? Voluptate sed accusamus ullam unde aperiam
      provident magnam incidunt repellat asperiores!
      <br />
      <br />
      <ButtonGroup>
        <Button variant="outlined">Create</Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </article>
  );
}

export default function App() {
  return (
    <Container fixed>
      <Header />
      <Grid container>
        <Grid item xs="2">
          <Nav />
        </Grid>
        <Grid item xs="10">
          <Article />
        </Grid>
      </Grid>
    </Container>
  );
}
