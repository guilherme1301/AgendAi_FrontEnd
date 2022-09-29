import React from "react";

import LoyaltyIcon from "@material-ui/icons/Loyalty";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import NoteIcon from "@material-ui/icons/Note";
import { MeetingRoom } from "@material-ui/icons";
import TimelineIcon from '@material-ui/icons/Timeline';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

export default (classes) => {
  return [
    {
      icon: <HomeIcon />,
      label: "Início",
      link: "/",
      exact: true,
    },
    {
      icon: <SupervisedUserCircleIcon />,
      label: "Pacientes",
      link: "/patient",
      exact: false,
    },
    {
      icon: <PeopleIcon />,
      label: "Profissionais",
      link: "/professional",
      exact: false,
    },
    {
      icon: <NoteIcon classes={{ root: classes.rotatedIcon }} />,
      label: "Prontuários",
      link: "/prontuary",
      exact: false,
    },
    {
      icon: <LoyaltyIcon />,
      label: "Especialidades",
      link: "/specialty",
      exact: false,
    },
    {
      icon: <MeetingRoom />,
      label: "Salas",
      link: "/room",
      exact: false,
    },
    {
      icon: <TimelineIcon />,
      label: "Roteiro",
      link: "/roadmap",
      exact: false,
    },
  ];
};
