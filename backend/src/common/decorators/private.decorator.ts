import { SetMetadata } from "@nestjs/common";
import { IS_PRIVATE } from "src/constants";

export const Private = () => SetMetadata(IS_PRIVATE, true);