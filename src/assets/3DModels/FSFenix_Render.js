
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function FSFenix_Render_v2(props) {
  const { nodes, materials } = useGLTF("/FSFenix_Render.gltf");
  return (
    <group {...props} dispose={null}>
   
      <group
        name="Car"
        position={[0, 0.5, 0]}
        scale={0.0015558} 
      >
        <mesh
          name="Mesh_0"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0.geometry}
          material={materials["Default Material"]}
        />
        <mesh
          name="Mesh_0_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_1.geometry}
          material={materials["Red Metallic Paint"]}
        />
        <mesh
          name="Mesh_0_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_2.geometry}
          material={materials["Red Metallic Paint.001"]}
        />
        <mesh
          name="Mesh_0_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_3.geometry}
          material={materials["Red Metallic Paint.002"]}
        />
        <mesh
          name="Mesh_0_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_4.geometry}
          material={materials["Red Metallic Paint.003"]}
        />
        <mesh
          name="Mesh_0_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_5.geometry}
          material={materials["Red Metallic Paint.004"]}
        />
        <mesh
          name="Mesh_0_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_6.geometry}
          material={materials["Red Metallic Paint.005"]}
        />
        <mesh
          name="Mesh_0_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_7.geometry}
          material={materials["Red Metallic Paint.006"]}
        />
        <mesh
          name="Mesh_0_8"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_8.geometry}
          material={materials["Red Metallic Paint.007"]}
        />
        <mesh
          name="Mesh_0_9"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_9.geometry}
          material={materials["Red Metallic Paint.008"]}
        />
        <mesh
          name="Mesh_0_10"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_10.geometry}
          material={materials["Red Metallic Paint.009"]}
        />
        <mesh
          name="Mesh_0_11"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_11.geometry}
          material={materials["Red Metallic Paint.010"]}
        />
        <mesh
          name="Mesh_0_12"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_12.geometry}
          material={materials["Red Metallic Paint.011"]}
        />
        <mesh
          name="Mesh_0_13"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_13.geometry}
          material={materials["Red Metallic Paint.012"]}
        />
        <mesh
          name="Mesh_0_14"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_14.geometry}
          material={materials["Red Metallic Paint.013"]}
        />
        <mesh
          name="Mesh_0_15"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_15.geometry}
          material={materials["Red Metallic Paint.014"]}
        />
        <mesh
          name="Mesh_0_16"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_16.geometry}
          material={materials["Red Metallic Paint.015"]}
        />
        <mesh
          name="Mesh_0_17"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_17.geometry}
          material={materials["Red Metallic Paint.016"]}
        />
        <mesh
          name="Mesh_0_18"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_18.geometry}
          material={materials["Red Metallic Paint.017"]}
        />
        <mesh
          name="Mesh_0_19"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_19.geometry}
          material={materials["Red Metallic Paint.018"]}
        />
        <mesh
          name="Mesh_0_20"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_20.geometry}
          material={materials["Red Metallic Paint.019"]}
        />
        <mesh
          name="Mesh_0_21"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_21.geometry}
          material={materials["Carbon Fiber"]}
        />
        <mesh
          name="Mesh_0_22"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_22.geometry}
          material={materials["Brushed Aluminum 2"]}
        />
        <mesh
          name="Mesh_0_23"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_23.geometry}
          material={materials["Black Leather 2"]}
        />
        <mesh
          name="Mesh_0_24"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_24.geometry}
          material={materials["Carbon Fiber 2"]}
        />
        <mesh
          name="Mesh_0_25"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_25.geometry}
          material={materials.Titanium}
        />
        <mesh
          name="Mesh_0_26"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_26.geometry}
          material={materials["Titanium.001"]}
        />
        <mesh
          name="Mesh_0_27"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_27.geometry}
          material={materials["Red Metallic Paint.020"]}
        />
        <mesh
          name="Mesh_0_28"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_28.geometry}
          material={materials.Magnesium}
        />
        <mesh
          name="Mesh_0_29"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_29.geometry}
          material={materials["Basic Black Plastic"]}
        />
        <mesh
          name="Mesh_0_30"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_30.geometry}
          material={materials["Basic Black Plastic.001"]}
        />
        <mesh
          name="Mesh_0_31"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_31.geometry}
          material={materials["Basic Black Plastic.002"]}
        />
        <mesh
          name="Mesh_0_32"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_32.geometry}
          material={materials["Basic Black Plastic.003"]}
        />
        <mesh
          name="Mesh_0_33"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_33.geometry}
          material={materials["Basic Black Plastic.004"]}
        />
        <mesh
          name="Mesh_0_34"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_34.geometry}
          material={materials["Basic Black Plastic.005"]}
        />
        <mesh
          name="Mesh_0_35"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_35.geometry}
          material={materials["Basic Black Plastic.006"]}
        />
        <mesh
          name="Mesh_0_36"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_36.geometry}
          material={materials["Classic Radiator Steel"]}
        />
        <mesh
          name="Mesh_0_37"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_37.geometry}
          material={materials["Basic Black Plastic.007"]}
        />
        <mesh
          name="Mesh_0_38"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_38.geometry}
          material={materials["Heat Treated Titanium"]}
        />
        <mesh
          name="Mesh_0_39"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_39.geometry}
          material={materials["Heat Treated Titanium.001"]}
        />
        <mesh
          name="Mesh_0_40"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_40.geometry}
          material={materials["Heat Treated Titanium.002"]}
        />
        <mesh
          name="Mesh_0_41"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_41.geometry}
          material={materials["Heat Treated Titanium.003"]}
        />
        <mesh
          name="Mesh_0_42"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_42.geometry}
          material={materials["Black Metallic Paint"]}
        />
        <mesh
          name="Mesh_0_43"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_43.geometry}
          material={materials["Black Metallic Paint.001"]}
        />
        <mesh
          name="Mesh_0_44"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_44.geometry}
          material={materials["Red Metallic Paint.021"]}
        />
        <mesh
          name="Mesh_0_45"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_45.geometry}
          material={materials["Scratched Aluminum"]}
        />
        <mesh
          name="Mesh_0_46"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_46.geometry}
          material={materials["Yellow Metallic Paint"]}
        />
        <mesh
          name="Mesh_0_47"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_47.geometry}
          material={materials["Scratched Aluminum.001"]}
        />
        <mesh
          name="Mesh_0_48"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_48.geometry}
          material={materials["Scratched Aluminum.002"]}
        />
        <mesh
          name="Mesh_0_49"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_49.geometry}
          material={materials["Scratched Aluminum 2"]}
        />
        <mesh
          name="Mesh_0_50"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_50.geometry}
          material={materials["Red Metallic Paint.022"]}
        />
        <mesh
          name="Mesh_0_51"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_51.geometry}
          material={materials["Red Metallic Paint.023"]}
        />
        <mesh
          name="Mesh_0_52"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_52.geometry}
          material={materials["Red Metallic Paint.024"]}
        />
        <mesh
          name="Mesh_0_53"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_53.geometry}
          material={materials["Red Metallic Paint.025"]}
        />
        <mesh
          name="Mesh_0_54"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_54.geometry}
          material={materials["Red Metallic Paint.026"]}
        />
        <mesh
          name="Mesh_0_55"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_55.geometry}
          material={materials["Heat Treated Titanium.004"]}
        />
        <mesh
          name="Mesh_0_56"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_56.geometry}
          material={materials["Green Metallic Paint"]}
        />
        <mesh
          name="Mesh_0_57"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_57.geometry}
          material={materials["Black Metallic Paint.002"]}
        />
        <mesh
          name="Mesh_0_58"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_58.geometry}
          material={materials["Scratched Aluminum.003"]}
        />
        <mesh
          name="Mesh_0_59"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_59.geometry}
          material={materials["Scratched Aluminum.004"]}
        />
        <mesh
          name="Mesh_0_60"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_60.geometry}
          material={materials["Scratched Aluminum.005"]}
        />
        <mesh
          name="Mesh_0_61"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_61.geometry}
          material={materials["Scratched Aluminum 2.001"]}
        />
        <mesh
          name="Mesh_0_62"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_62.geometry}
          material={materials["Red Metallic Paint.027"]}
        />
        <mesh
          name="Mesh_0_63"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_63.geometry}
          material={materials["Red Metallic Paint.028"]}
        />
        <mesh
          name="Mesh_0_64"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_64.geometry}
          material={materials["Red Metallic Paint.029"]}
        />
        <mesh
          name="Mesh_0_65"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_65.geometry}
          material={materials["Red Metallic Paint.030"]}
        />
        <mesh
          name="Mesh_0_66"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_66.geometry}
          material={materials["Red Metallic Paint.031"]}
        />
        <mesh
          name="Mesh_0_67"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_67.geometry}
          material={materials["Scratched Aluminum.006"]}
        />
        <mesh
          name="Mesh_0_68"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_68.geometry}
          material={materials["Scratched Aluminum.007"]}
        />
        <mesh
          name="Mesh_0_69"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_69.geometry}
          material={materials["Scratched Aluminum.008"]}
        />
        <mesh
          name="Mesh_0_70"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_70.geometry}
          material={materials["Scratched Aluminum 2.002"]}
        />
        <mesh
          name="Mesh_0_71"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_71.geometry}
          material={materials["Red Metallic Paint.032"]}
        />
        <mesh
          name="Mesh_0_72"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_72.geometry}
          material={materials["Red Metallic Paint.033"]}
        />
        <mesh
          name="Mesh_0_73"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_73.geometry}
          material={materials["Red Metallic Paint.034"]}
        />
        <mesh
          name="Mesh_0_74"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_74.geometry}
          material={materials["Red Metallic Paint.035"]}
        />
        <mesh
          name="Mesh_0_75"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_75.geometry}
          material={materials["Black Metallic Paint.003"]}
        />
        <mesh
          name="Mesh_0_76"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_76.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          name="Mesh_0_77"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_77.geometry}
          material={materials["Red Metallic Paint.036"]}
        />
        <mesh
          name="Mesh_0_78"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_78.geometry}
          material={materials["Red Metallic Paint.037"]}
        />
        <mesh
          name="Mesh_0_79"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_79.geometry}
          material={materials["Red Metallic Paint.038"]}
        />
        <mesh
          name="Mesh_0_80"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_80.geometry}
          material={materials["Red Metallic Paint.039"]}
        />
        <mesh
          name="Mesh_0_81"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_81.geometry}
          material={materials["Red Metallic Paint.040"]}
        />
        <mesh
          name="Mesh_0_82"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_82.geometry}
          material={materials["Red Metallic Paint.041"]}
        />
        <mesh
          name="Mesh_0_83"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_83.geometry}
          material={materials["Red Metallic Paint.042"]}
        />
        <mesh
          name="Mesh_0_84"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_84.geometry}
          material={materials["Red Metallic Paint.043"]}
        />
        <mesh
          name="Mesh_0_85"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_85.geometry}
          material={materials["Red Metallic Paint.044"]}
        />
        <mesh
          name="Mesh_0_86"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_86.geometry}
          material={materials["Red Metallic Paint.045"]}
        />
        <mesh
          name="Mesh_0_87"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_87.geometry}
          material={materials["Red Metallic Paint.046"]}
        />
        <mesh
          name="Mesh_0_88"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_88.geometry}
          material={materials["Red Metallic Paint.047"]}
        />
        <mesh
          name="Mesh_0_89"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_89.geometry}
          material={materials["Red Metallic Paint.048"]}
        />
        <mesh
          name="Mesh_0_90"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_90.geometry}
          material={materials["Red Metallic Paint.049"]}
        />
        <mesh
          name="Mesh_0_91"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_91.geometry}
          material={materials["Red Metallic Paint.050"]}
        />
        <mesh
          name="Mesh_0_92"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_92.geometry}
          material={materials["Red Metallic Paint.051"]}
        />
        <mesh
          name="Mesh_0_93"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_93.geometry}
          material={materials["Red Metallic Paint.052"]}
        />
        <mesh
          name="Mesh_0_94"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_94.geometry}
          material={materials["Red Metallic Paint.053"]}
        />
        <mesh
          name="Mesh_0_95"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_95.geometry}
          material={materials["Red Metallic Paint.054"]}
        />
        <mesh
          name="Mesh_0_96"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_96.geometry}
          material={materials["Red Metallic Paint.055"]}
        />
        <mesh
          name="Mesh_0_97"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_97.geometry}
          material={materials["Red Metallic Paint.056"]}
        />
        <mesh
          name="Mesh_0_98"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_98.geometry}
          material={materials["Ultra Gloss Black 2"]}
        />
        <mesh
          name="Mesh_0_99"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_99.geometry}
          material={materials["Red Metallic Paint.057"]}
        />
        <mesh
          name="Mesh_0_100"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_100.geometry}
          material={materials["Red Metallic Paint.058"]}
        />
        <mesh
          name="Mesh_0_101"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_101.geometry}
          material={materials["Red Metallic Paint.059"]}
        />
        <mesh
          name="Mesh_0_102"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_102.geometry}
          material={materials["Red Metallic Paint.060"]}
        />
        <mesh
          name="Mesh_0_103"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_103.geometry}
          material={materials["Red Metallic Paint.061"]}
        />
        <mesh
          name="Mesh_0_104"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_104.geometry}
          material={materials["Red Metallic Paint.062"]}
        />
        <mesh
          name="Mesh_0_105"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_105.geometry}
          material={materials["Red Metallic Paint.063"]}
        />
        <mesh
          name="Mesh_0_106"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_106.geometry}
          material={materials["Red Metallic Paint.064"]}
        />
        <mesh
          name="Mesh_0_107"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_107.geometry}
          material={materials["Red Metallic Paint.065"]}
        />
        <mesh
          name="Mesh_0_108"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_108.geometry}
          material={materials["Red Metallic Paint.066"]}
        />
        <mesh
          name="Mesh_0_109"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_109.geometry}
          material={materials["Red Metallic Paint.067"]}
        />
        <mesh
          name="Mesh_0_110"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_110.geometry}
          material={materials["Red Metallic Paint.068"]}
        />
        <mesh
          name="Mesh_0_111"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_111.geometry}
          material={materials["Red Metallic Paint.069"]}
        />
        <mesh
          name="Mesh_0_112"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_112.geometry}
          material={materials["Red Metallic Paint.070"]}
        />
        <mesh
          name="Mesh_0_113"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_113.geometry}
          material={materials["Red Metallic Paint.071"]}
        />
        <mesh
          name="Mesh_0_114"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_114.geometry}
          material={materials["Red Metallic Paint.072"]}
        />
        <mesh
          name="Mesh_0_115"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_115.geometry}
          material={materials["Red Metallic Paint.073"]}
        />
        <mesh
          name="Mesh_0_116"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_116.geometry}
          material={materials["Red Metallic Paint.074"]}
        />
        <mesh
          name="Mesh_0_117"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_117.geometry}
          material={materials["Red Metallic Paint.075"]}
        />
        <mesh
          name="Mesh_0_118"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_118.geometry}
          material={materials["Red Metallic Paint.076"]}
        />
        <mesh
          name="Mesh_0_119"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_119.geometry}
          material={materials["Red Metallic Paint.077"]}
        />
        <mesh
          name="Mesh_0_120"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_120.geometry}
          material={materials["Red Metallic Paint.078"]}
        />
        <mesh
          name="Mesh_0_121"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_121.geometry}
          material={materials["Red Metallic Paint.079"]}
        />
        <mesh
          name="Mesh_0_122"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_122.geometry}
          material={materials["Red Metallic Paint.080"]}
        />
        <mesh
          name="Mesh_0_123"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_123.geometry}
          material={materials["Red Metallic Paint.081"]}
        />
        <mesh
          name="Mesh_0_124"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_124.geometry}
          material={materials["Red Metallic Paint.082"]}
        />
        <mesh
          name="Mesh_0_125"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_125.geometry}
          material={materials["Red Metallic Paint.083"]}
        />
        <mesh
          name="Mesh_0_126"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_126.geometry}
          material={materials["Red Metallic Paint.084"]}
        />
        <mesh
          name="Mesh_0_127"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_127.geometry}
          material={materials["Red Metallic Paint.085"]}
        />
        <mesh
          name="Mesh_0_128"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_128.geometry}
          material={materials["Red Metallic Paint.086"]}
        />
        <mesh
          name="Mesh_0_129"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_129.geometry}
          material={materials["Red Metallic Paint.087"]}
        />
        <mesh
          name="Mesh_0_130"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_130.geometry}
          material={materials["Red Metallic Paint.088"]}
        />
        <mesh
          name="Mesh_0_131"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_131.geometry}
          material={materials["Red Metallic Paint.089"]}
        />
        <mesh
          name="Mesh_0_132"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_132.geometry}
          material={materials["Ultra Gloss Black 2.001"]}
        />
        <mesh
          name="Mesh_0_133"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_133.geometry}
          material={materials["Red Metallic Paint.090"]}
        />
        <mesh
          name="Mesh_0_134"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_134.geometry}
          material={materials["Red Metallic Paint.091"]}
        />
        <mesh
          name="Mesh_0_135"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_135.geometry}
          material={materials["Red Metallic Paint.092"]}
        />
        <mesh
          name="Mesh_0_136"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_136.geometry}
          material={materials["Red Metallic Paint.093"]}
        />
        <mesh
          name="Mesh_0_137"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_137.geometry}
          material={materials["Red Metallic Paint.094"]}
        />
        <mesh
          name="Mesh_0_138"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_138.geometry}
          material={materials["Red Metallic Paint.095"]}
        />
        <mesh
          name="Mesh_0_139"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_139.geometry}
          material={materials["Red Metallic Paint.096"]}
        />
        <mesh
          name="Mesh_0_140"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_140.geometry}
          material={materials["Scratched Aluminum.009"]}
        />
        <mesh
          name="Mesh_0_141"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_141.geometry}
          material={materials["Scratched Aluminum.010"]}
        />
        <mesh
          name="Mesh_0_142"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_142.geometry}
          material={materials["Scratched Aluminum.011"]}
        />
        <mesh
          name="Mesh_0_143"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_143.geometry}
          material={materials["Scratched Aluminum 2.003"]}
        />
        <mesh
          name="Mesh_0_144"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_144.geometry}
          material={materials["Red Metallic Paint.097"]}
        />
        <mesh
          name="Mesh_0_145"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_145.geometry}
          material={materials["Red Metallic Paint.098"]}
        />
        <mesh
          name="Mesh_0_146"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_146.geometry}
          material={materials["Red Metallic Paint.099"]}
        />
        <mesh
          name="Mesh_0_147"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_147.geometry}
          material={materials["Red Metallic Paint.100"]}
        />
        <mesh
          name="Mesh_0_148"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_148.geometry}
          material={materials["Red Metallic Paint.101"]}
        />
        <mesh
          name="Mesh_0_149"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_149.geometry}
          material={materials["Red Metallic Paint.102"]}
        />
        <mesh
          name="Mesh_0_150"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_150.geometry}
          material={materials["Yellow Metallic Paint.001"]}
        />
        <mesh
          name="Mesh_0_151"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_151.geometry}
          material={materials["Yellow Metallic Paint.002"]}
        />
        <mesh
          name="Mesh_0_152"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_152.geometry}
          material={materials["Yellow Metallic Paint.003"]}
        />
        <mesh
          name="Mesh_0_153"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_153.geometry}
          material={materials["Yellow Metallic Paint.004"]}
        />
        <mesh
          name="Mesh_0_154"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_154.geometry}
          material={materials["Scratched Aluminum.012"]}
        />
        <mesh
          name="Mesh_0_155"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_155.geometry}
          material={materials["Yellow Metallic Paint.005"]}
        />
        <mesh
          name="Mesh_0_156"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_156.geometry}
          material={materials["Yellow Metallic Paint.006"]}
        />
        <mesh
          name="Mesh_0_157"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_157.geometry}
          material={materials["Scratched Aluminum.013"]}
        />
        <mesh
          name="Mesh_0_158"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_158.geometry}
          material={materials["Yellow Metallic Paint.007"]}
        />
        <mesh
          name="Mesh_0_159"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_159.geometry}
          material={materials["Scratched Aluminum.014"]}
        />
        <mesh
          name="Mesh_0_160"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_160.geometry}
          material={materials["Scratched Aluminum.015"]}
        />
        <mesh
          name="Mesh_0_161"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_161.geometry}
          material={materials["Red Metallic Paint.103"]}
        />
        <mesh
          name="Mesh_0_162"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_162.geometry}
          material={materials["Sedan Tire Tread"]}
        />
        <mesh
          name="Mesh_0_163"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_163.geometry}
          material={materials["Sedan Tire Tread.001"]}
        />
        <mesh
          name="Mesh_0_164"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_164.geometry}
          material={materials["Red Metallic Paint.104"]}
        />
      </group>
      <group
        name="Light001"
        position={[-6.70901537, 13.23885727, 4.3268714]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light001_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Light005"
        position={[2.65318251, 13.23885727, -0.6731286]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light005_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Light004"
        position={[-6.70901537, 13.23885727, -0.6731286]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light004_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Light003"
        position={[11.29098511, 13.10138226, -0.6731286]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light003_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Light008"
        position={[2.65318251, 13.23885727, -7.6731286]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light008_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Light007"
        position={[-6.70901537, 13.23885727, -7.6731286]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
        c
      >
        <pointLight
          name="Light007_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Light006"
        position={[11.29098511, 13.23885727, -7.6731286]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light006_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      
      {/* 
      commented for visual purposes
      <group
        name="Light011"
        position={[2.65318251, 12.80334949, 9.32687187]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light011_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Light010"
        position={[-6.70901537, 13.23885727, 9.32687187]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light010_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Light009"
        position={[11.29098511, 13.23885727, 9.32687187]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light009_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Light"
        position={[2.65318251, 13.23885727, 4.3268714]}
        rotation={[1.89012596, 0.88056835, -2.04521599]}
      >
        <pointLight
          name="Light_Orientation"
          intensity={300}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group> */}
    </group>
  );
}

useGLTF.preload("/FSFenix_Render.gltf");
