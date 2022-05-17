import { Select, MenuItem, AppBar,Tabs, Tab, Typography, } from "@mui/material";
import { Toolbar } from "@mui/material";
import React from "react";

const DROP = () => {

  const [course, setCourse] = React.useState(0);
  const updateValue = (e, val) => {
    console.warn(e.target.value)
    setCourse(e.target.value)
  }

  return (
    <React.Fragment>
      <AppBar sx={{ background: "white", marginTop: "70px", height: "35px" }}>
        <Toolbar>
          <Select
            value={course}
            displayEmpty
            onChange={updateValue}
            sx={{ width: "15%", height: "35px", marginBottom: "30px", fontWeight: "bold", color: "#3866DF" }} >
            <MenuItem value={0}>ALL CATEGORIES</MenuItem>
            <MenuItem value={1}>Dumy Data</MenuItem>
            <MenuItem value={2}>Dumy Data</MenuItem>
            <MenuItem value={3}>Dumy Data</MenuItem>
            <MenuItem value={4}>Dumy Data</MenuItem>
          </Select>
          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="Electronics" />
          </Tabs>

          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="Men" />
          </Tabs>

          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="woman" />
          </Tabs>

          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="home" />
          </Tabs>

          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="Beuty&fragrance" />
          </Tabs>

          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="baby&toys" />
          </Tabs>

          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="grocery" />
          </Tabs>

          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="sports" />
          </Tabs>

          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="Bestseller" />
          </Tabs>

          <Tabs sx={{ marginBottom: "30px", textColor: "black"}}>
            <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
              label="seel on noon" />
          </Tabs>
        </Toolbar>
          <img src="https://k.nooncdn.com/cms/pages/20220409/05b73fea272435d63ffd1f14e5c2fb7a/en_dk-toggle.png"/>
      </AppBar>
    </React.Fragment>
  )
}

export default DROP;