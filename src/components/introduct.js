import React from "react"
import { Grid, Typography } from '@material-ui/core';
import { Link } from "gatsby"
export default() => {
    return (
      <div>
      <Grid xs={12} md={12}>
      <Typography variant="h5" color="textPrimary">
      <p align="center">Hi friend, Bạn có thể làm rất nhiều thứ trên blog của mình đó nha!</p>
      </Typography>
      </Grid>
      <Grid xs={12} md={12}>
          <Typography variant="h6" color="textSecondary">
            <ol>
              <li>Xem <Link to="/">tất cả bài viết</Link> từ Phan Cường</li>
              <li>Rũ đi <Link to="/contact">cà phê hoặc đánh cờ</Link></li>
              <li><Link to="/buy-me-a-coffee">Mua coffee</Link> tặng mình</li>
              <li>Sử dụng <Link to="/tools">Tools</Link> miễn phí</li>  
            </ol>
          </Typography>
      </Grid>
      </div>
    )
}