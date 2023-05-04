declare module "cpp" {
    import * as UE from "ue"
    import * as cpp from "cpp"
    import {$Ref, $Nullable, cstring} from "puerts"

    class FPuertsEditorModule {
        static SetCmdCallback(p0: (p0:string, p1:string) => void) :void;
    }

    class TestFunction {
        static Test_GetActorLocation(p0: UE.Actor) :UE.Vector;
        static Test_Fib(p0: number) :number;
        static Test_DistanceSqr(p0: UE.Vector) :number;
    }

}
