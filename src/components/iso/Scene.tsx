import type { Scene as SceneData } from "@/lib/scenes";
import { IsoFloat, IsoProp, IsoStage, IsoTile } from "@/components/iso/Iso";

/**
 * Renders a diorama from `scenes.ts`.
 *
 * The scene data and this component are the only two things that have to agree
 * about the lattice - everything else just hands over a list of pieces. Extra
 * children are drawn inside the same scaled coordinate space, which is how the
 * animated companions and light pools get placed among the sprites.
 */
export function Scene({
  scene,
  className = "",
  eager = false,
  children,
}: {
  scene: SceneData;
  className?: string;
  /** Set on the hero, whose ground tiles are the largest thing above the fold. */
  eager?: boolean;
  children?: React.ReactNode;
}) {
  const { origin } = scene;
  const stage = { w: scene.w, h: scene.h };

  return (
    <IsoStage w={scene.w} h={scene.h} className={className}>
      {scene.pieces.map((piece, i) => {
        if (piece.kind === "float") {
          return (
            <IsoFloat
              key={i}
              art={piece.art}
              stage={stage}
              x={piece.x ?? 0}
              y={piece.y ?? 0}
              scale={piece.scale}
              z={piece.layer ?? 0}
              className={piece.className}
            />
          );
        }
        const Piece = piece.kind === "tile" ? IsoTile : IsoProp;
        return (
          <Piece
            key={i}
            art={piece.art}
            stage={stage}
            r={piece.r}
            c={piece.c}
            dx={piece.dx}
            dy={piece.dy}
            scale={piece.scale}
            layer={piece.layer}
            flip={piece.flip}
            className={piece.className}
            origin={origin}
            eager={eager}
          />
        );
      })}
      {children}
    </IsoStage>
  );
}
