/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';
import {
  InfoCard,
  Header,
  Page,
  pageTheme,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@spotify-backstage/core';
import {
  Typography, 
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  FormLabel, 
  FormControl,
  Radio,
  InputLabel,
  OutlinedInput
}from '@material-ui/core'
import ExampleFetchComponent from '../ExampleFetchComponent';

const ExampleComponent: FC<{}> = () => (
  <Page theme={pageTheme.tool}>
    <Header title="Welcome to the Plugin Library!" subtitle="Find new plugins to add to your backstage">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plugin Library">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="row">
        <Grid item xs={3}>
          <InfoCard title="Find your next Plugin" maxWidth>
            <FormControl variant="outlined" fullWidth={true} margin="normal">
              <InputLabel>Search</InputLabel>
              <OutlinedInput label="search"></OutlinedInput>
            </FormControl>
            <FormControl fullWidth={true} margin="normal">
              <FormLabel component="legend">Quick Filters</FormLabel>
              <RadioGroup>
                <FormControlLabel value="popular" control={<Radio/>} label="Popular" />
                <FormControlLabel value="new" control={<Radio/>} label="New" />
                <FormControlLabel value="productivity" control={<Radio/>} label="Productivity" />
                <FormControlLabel value="monitoring" control={<Radio/>} label="Monitoring" />
              </RadioGroup>
            </FormControl>
          </InfoCard>
        </Grid>
        <Grid item xs={9}>
          <InfoCard title="Example User List (fetching data from randomuser.me)">
            <ExampleFetchComponent />
          </InfoCard>
        </Grid>
      </Grid>
    </Content>
  </Page>
);

export default ExampleComponent;
