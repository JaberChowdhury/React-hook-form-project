// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from "@generouted/react-router/client";

export type Path =
  | `/`
  | `/demo/UseformHook`
  | `/demo/UseformHook/code`
  | `/demo/UseformHookWithMappingAndZod`
  | `/demo/UseformHookWithMappingAndZod/code`
  | `/demo/UseformHookWithZod`
  | `/demo/UseformHookWithZod/code`
  | `/demo/WithUiLibraryAndZod`
  | `/demo/WithUiLibraryAndZod/code`;

export type Params = {};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>();
export const { redirect } = utils<Path, Params>();
